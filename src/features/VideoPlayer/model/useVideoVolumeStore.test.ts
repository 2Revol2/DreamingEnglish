import { beforeEach, describe, expect, it, vi } from "vitest";
import { VIDEO_VOLUME_LOCAL_STORAGE_KEY } from "@/shared/constants/localstorage";

const createLocalStorageMock = () => {
  const data = new Map<string, string>();
  return {
    getItem: (key: string) => data.get(key) ?? null,
    setItem: (key: string, value: string) => void data.set(key, value),
    removeItem: (key: string) => void data.delete(key),
  };
};

describe("useVideoVolumeStore", () => {
  let storage: ReturnType<typeof createLocalStorageMock>;

  const loadStore = async () => {
    vi.resetModules();
    return (await import("./useVideoVolumeStore")).useVideoVolumeStore;
  };

  beforeEach(() => {
    storage = createLocalStorageMock();
    vi.stubGlobal("localStorage", storage);
  });

  it("defaults to full volume and unmuted", async () => {
    const store = await loadStore();
    expect(store.getState()).toMatchObject({ volume: 1, muted: false });
  });

  it("persists volume and muted state to localStorage", async () => {
    const store = await loadStore();
    store.getState().setVolume(0.3);
    store.getState().setMuted(true);

    const saved = JSON.parse(storage.getItem(VIDEO_VOLUME_LOCAL_STORAGE_KEY)!);
    expect(saved.state).toEqual({ volume: 0.3, muted: true });
  });

  it("restores saved volume after a fresh load (remount / reload)", async () => {
    const first = await loadStore();
    first.getState().setVolume(0.25);

    const second = await loadStore();
    expect(second.getState().volume).toBe(0.25);
  });

  it("clamps out-of-range and invalid values", async () => {
    const store = await loadStore();
    store.getState().setVolume(5);
    expect(store.getState().volume).toBe(1);
    store.getState().setVolume(-1);
    expect(store.getState().volume).toBe(0);
    store.getState().setVolume(NaN);
    expect(store.getState().volume).toBe(1);
  });
});

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(response: Response, data: unknown = null) {
    super(response.statusText);
    this.name = "ApiError";
    this.status = response.status;
    this.data = data;
  }
}

export async function apiWithHeaders<T>(path: string, options?: RequestInit): Promise<{ data: T; headers: Headers }> {
  const response = await fetch(`${BASE_URL}${path}`, options);

  if (!response.ok) {
    const data = await response.json().catch(() => null);
    throw new ApiError(response, data);
  }

  return { data: (await response.json()) as T, headers: response.headers };
}

export async function api<T>(path: string, options?: RequestInit): Promise<T> {
  const { data } = await apiWithHeaders<T>(path, options);
  return data;
}

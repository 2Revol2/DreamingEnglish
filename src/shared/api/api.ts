const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class ApiError extends Error {
  status: number;

  constructor(response: Response) {
    super(response.statusText);
    this.name = "ApiError";
    this.status = response.status;
  }
}

export async function api<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, options);

  if (!response.ok) {
    throw new ApiError(response);
  }

  return (await response.json()) as T;
}

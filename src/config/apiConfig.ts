// export const API_BASE_URL = "https://admin.delryt.com/api/v1";
// export const IMAGE_BASE_PATH = "https://admin.delryt.com/storage/app/public";

const requireEnv = (value: string | undefined, key: string) => {
  if (!value) {
    throw new Error(`Missing env: ${key}`);
  }
  return value;
};

export const API_BASE_URL = requireEnv(
  process.env.NEXT_PUBLIC_API_BASE_URL,
  "NEXT_PUBLIC_API_BASE_URL"
);

export const IMAGE_BASE_PATH = requireEnv(
  process.env.NEXT_PUBLIC_IMAGE_BASE_PATH,
  "NEXT_PUBLIC_IMAGE_BASE_PATH"
);

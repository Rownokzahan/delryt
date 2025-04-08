import { IMAGE_BASE_PATH } from "@/config/apiConfig";

export const getImagePath = (folder: string, filename: string) => {
  const basePath = IMAGE_BASE_PATH || "";
  return `${basePath}/${folder}/${filename}`;
};

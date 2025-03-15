export interface Dimension {
  width: number;
  height: number;
}
export async function getImageSize(imagePath: string): Promise<Dimension> {
  const image = new Image();
  return new Promise((resolve, reject) => {
    image.onload = function () {
      resolve({
        width: image.width,
        height: image.height,
      });
    };
    image.onerror = function (error) {
      reject(error);
    };
    image.src = imagePath;
  });
}

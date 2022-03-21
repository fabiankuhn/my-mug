export const cropImage = async (
  url: string,
  crop: {
    width: number,
    height: number,
    x: number,
    y: number
  }
): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext('2d');

  const img = new Image;
  img.src = url

  return new Promise(resolve => {
    img.onload = () => {
      ctx?.drawImage(
        img,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      );

      canvas.toBlob((file: any) => {
        resolve(URL.createObjectURL(file))
      }, 'image/jpeg')
    }
  })
}

export function loadImages(folderKey) {
  const folderPaths = {
    buketiAranzmani: "@/assets/ponuda_cvijeca/buketi_i_aranzmani",
    aranzmani: "@/assets/ponuda_cvijeca/aranzmani",
    vijenci: "@/assets/ponuda_cvijeca/vijenci",
    cvijece_za_lijes: "@/assets/ponuda_cvijeca/cvijece_za_lijes",
  };

  const folderPath = folderPaths[folderKey];
  if (!folderPath) {
    console.error(`Invalid folder key: ${folderKey}`);
    return [];
  }

  try {
    const context = require.context(folderPath, false, /\.(png|jpe?g|svg)$/);
    return context.keys().map((filename) => ({
      filename: filename.slice(2), // Remove './' from the filename
      title: filename.slice(2, -4), // Remove './' and extension
      alt: filename.slice(2, -4), // Use the title as the alt text
    }));
  } catch (error) {
    console.error(`Error loading images from folder: ${folderPath}`, error);
    return [];
  }
}

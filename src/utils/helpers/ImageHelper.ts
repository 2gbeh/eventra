const hasInternet = window?.navigator?.onLine;

export default class ImageHelper {
  static src = (image: string | undefined, fallback: string) =>
    hasInternet && image ? image : fallback;

  static url = (image: string | undefined, fallback: string) =>
    hasInternet && image ? `url('${image}')` : `url('${fallback}')`;
    
}

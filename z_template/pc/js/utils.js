// 判断url文件类型
export function getFileType(str) {
    if (typeof str !== "string") {
      throw "参数类型错误";
    }
    let suffixName = str.substring(str.lastIndexOf("."));
    let imgType = [
      ".bmp",
      ".jpg",
      ".jpeg",
      ".jpe",
      ".jxr",
      ".png",
      ".tif",
      ".tiff",
      ".avif",
      ".xbm",
      ".pjp",
      ".svgz",
      ".ico",
      ".svg",
      ".jfif",
      ".webp",
      ".pjpeg",
      ".gif",
      ".iff",
      ".ilbm",
      ".ppm",
      ".pcx",
      ".xcf",
      ".xpm",
      ".psd",
      ".mng",
      ".sai",
      ".psp",
      ".ufo",
    ];
    let videoType = [
      ".mp4",
      ".3gp",
      ".avi",
      ".wmv",
      ".mpeg",
      ".mpg",
      ".mov",
      ".flv",
      ".swf",
      ".qsv",
      ".kux",
      ".mpg",
      ".rm",
      ".ram",
    ];
    let audioType = [
      ".mp3",
      ".mp2",
      ".mp1",
      ".wav",
      ".aif",
      ".aiff",
      ".au",
      ".ra",
      ".rm",
      ".ram",
      ".mid",
      ".rmi",
    ];
    let fileType = ["img", "video", "audio"];
    if (imgType.includes(suffixName)) {
      return fileType[0];
    }
    if (videoType.includes(suffixName)) {
      return fileType[1];
    }
    if (audioType.includes(suffixName)) {
      return fileType[2];
    }
    return false;
  }
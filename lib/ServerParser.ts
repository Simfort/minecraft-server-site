export interface ServerMinecraft {
  version: string;
  ip: string;
  playersOnline: string;
  banner: string;
}

export class ServerParser {
  static url: string = "https://minecraftrating.ru/";
  static async #getSite(text?: string, type?: "search" | "page") {
    const res =
      type === "search"
        ? await fetch(`${this.url}/search/${text}`, { cache: "force-cache" })
        : await fetch(this.url, { cache: "force-cache" });
    const data = await res.text();

    const parser = new DOMParser();
    const documentP = parser.parseFromString(data, "text/html");

    const blocks = documentP.querySelectorAll(".server-new");
    return blocks;
  }

  static async topServers(): Promise<ServerMinecraft[]> {
    const blocks = await this.#getSite();
    const result: ServerMinecraft[] = [];

    blocks.forEach((block) => {
      const versionElement = block.querySelector(".block-i span");
      const version = versionElement
        ? versionElement.textContent?.trim()
        : "N/A";

      const ipElement = block.querySelector("[data-clipboard-text]");
      const ip = ipElement
        ? ipElement.getAttribute("data-clipboard-text")!.trim()
        : "N/A";
      const banner = (
        block.querySelector(".banner-lazy") as HTMLImageElement
      ).getAttribute("data-src")!;

      const playersElement = block.querySelector('[itemprop="playersOnline"]');
      const playersOnline = playersElement
        ? playersElement.textContent?.trim()
        : "N/A";

      result.push({
        version,
        ip,
        banner,
        playersOnline,
      });
    });

    return result;
  }
  static async getServers(search: string) {
    const blocks = await this.#getSite(search);
    const result: ServerMinecraft[] = [];

    blocks.forEach((block) => {
      const versionElement = block.querySelector(".block-i span");
      const version = versionElement
        ? versionElement.textContent?.trim()
        : "N/A";

      const ipElement = block.querySelector("[data-clipboard-text]");
      const ip = ipElement
        ? ipElement.getAttribute("data-clipboard-text")!.trim()
        : "N/A";
      const banner = (
        block.querySelector(".banner-lazy") as HTMLImageElement
      ).getAttribute("data-src")!;

      const playersElement = block.querySelector('[itemprop="playersOnline"]');
      const playersOnline = playersElement
        ? playersElement.textContent?.trim()
        : "N/A";

      result.push({
        version,
        ip,
        banner,
        playersOnline,
      });
    });

    return result;
  }
}

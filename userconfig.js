let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Hamburg, Lower Saxony',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Video",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube",
            icon_color: "#cc241d",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
        ],
      }, {
        name: "Streaming Services",
        links: [
          {
            name: "netflix",
            url: "https://www.netflix.com",
            icon: "brand-netflix",
            icon_color: "#fb4934",
          },
          {
            name: "primevideo",
            url: "https://www.primevideo.com/region/eu/?ref_=dv_web_unknown",
            icon: "brand-amazon",
            icon_color: "#7daea3",
          },
          {
            name: "disney+",
            url: "https://www.disneyplus.com/home",
            icon: "brand-disney",
            icon_color: "#7daea3",
          },
          {
            name: "crunchyroll",
            url: "https://www.crunchyroll.com",
            icon: "brand-bilibili",
            icon_color: "#fe8019",
          },
        ],
      }, {
        name: "Network",
        links: [
          {
            name: "nextcloud",
            url: "https://cloud.easy-eavo.de",
            icon: "brand-nextcloud",
            icon_color: "#458588",
          },
          {
            name: "homeassistant",
            url: "http://192.168.10.2/",
            icon: "smart-home",
            icon_color: "#7daea3",
          },
          {
            name: "pihole",
            url: "http://192.168.10.2/admin/login",
            icon: "diamonds",
            icon_color: "#cc241d",
          },
          {
            name: "DMZ",
            url: "http://192.168.178.1/",
            icon: "cloud-lock",
            icon_color: "#d79921",
          },
          {
            name: "LAN",
            url: "http://192.168.10.1",
            icon: "network",
            icon_color: "#7daea3",
          },
          {
            name: "WLAN",
            url: "http://192.168.10.10",
            icon: "wifi",
            icon_color: "#cc241d",
          },
        ],
      }
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

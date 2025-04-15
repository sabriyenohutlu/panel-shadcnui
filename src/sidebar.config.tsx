export const menuConfig = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      label: "Anasayfa",
      to: "/",
      icon: "",
      type: "link",
    },
    {
      label: "E-Ticaret",
      icon: "",
      key: "e-ticaret",
      type: "menu",
      rootRoute: "e-ticaret",
      handleClick: true,
      menu: true,
      requiredApps: ["e-commerce"],
      children: [
        {
          label: "Genel Bakış",
          to: "/e-ticaret",
          type: "link",
        },
        {
          label: "Trendyol",
          key: "e-ticaret/trendyol",
          type: "submenu",
          children: [
            {
              label: "Siparişler",
              to: "/e-ticaret/trendyol/orders",
              type: "link",
            },
            {
              label: "Analiz",
              to: "/e-ticaret/trendyol/analysis",
              type: "link",
            },
            {
              label: "Soru Cevap",
              to: "/e-ticaret/trendyol/faq",
              type: "link",
              registrationRequired: true,
            },
          ],
        },
      ],
    },
    {
      label: "Uygulamalar",
      to: "/uygulamalar",
      rootRoute: "uygulamalar",
      icon: "",
      type: "link",
      menu: true,
      showIf: (userData: any) =>
        !Array.isArray(userData?.sectors) || userData.sectors.length > 0,
    },
    {
      label: "Profil",
      icon: "",
      key: "users",
      rootRoute: "profil",
      type: "menu",
      menu: true,
      children: [
        { label: "Profil", to: "/profil", type: "link" },
        { label: "Hesap Ayarları", to: "/hesap-ayarlari", type: "link" },
      ],
    },
    {
      label: "Form",
      icon: "",
      key: "users",
      rootRoute: "form",
      type: "menu",
      menu: true,
      children: [
        { label: "Form Component", to: "/form", type: "link" }
      ],
    },
    {
      label: "Auth Pages",
      icon: "",
      key: "auth",
      rootRoute: "form",
      type: "menu",
      menu: true,
      children: [
        { label: "Login", to: "/auth/login", type: "link" }
      ],
    },
    
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: "",
    },
    {
      title: "Get Help",
      url: "#",
      icon: "",
    },
    {
      title: "Search",
      url: "#",
      icon: "",
    },
  ],
};

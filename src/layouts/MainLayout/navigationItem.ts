interface NavigationItem {
  title: string;
  name: string;
}

interface NavigationGroup {
  icon: string;
  title: string;
  items?: Array<NavigationItem>;
  name?: string;
}

const navigationGroup: Array<NavigationGroup> = [
  {
    title: "Home",
    icon: "mdi-home",
    items: [
      {
        title: "Home",
        name: "honme",
      },
    ],
  },
];

export default navigationGroup;
export { NavigationGroup, NavigationItem };

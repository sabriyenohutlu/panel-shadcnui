import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from "@/components/ui/sidebar"
import { ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      items: [
        {
          title: "Charts",
          url: "/dashboard/charts",
        }
      ],
    },
    {
      title: "Pages",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        }
 ,
        {
          title: "Upgrading",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
    {
      title: "Forms",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        }
      ],
    },
    {
      title: "Form Elements",
      url: "#",
      isActive:true,
      items: [
        {
          title: "Accessibility",
          url: "#",
        }
      ],
    },
    {
      title: "Cards",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
          
        },
      ],
    },
  ],
}

 const AppSidebar = ({...props}) => {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        Sidebar header
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible key={item.title} title={item.title} defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild >
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
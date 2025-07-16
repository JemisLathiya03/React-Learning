import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

export const mainNavBarItems = [
  {
    id:1,
    icon: <PeopleIcon/>,
    label: "Authentication",
    route: "authentication"
  },
  {
    id:2,
    icon: <StorageIcon/>,
    label: "Database",
    route: "database"
  },
  {
    id:3,
    icon: <ImageIcon/>,
    label: "Storage",
    route: "storage"
  },
  {
    id:4,
    icon: <PublicIcon/>,
    label: "Hosting",
    route: "hosting"
  },
  {
    id:5,
    icon: <SettingsEthernetIcon/>,
    label: "Functions",
    route: "functions"
  },
  {
    id:6,
    icon: <LocalLibraryIcon/>,
    label: "Machine Learning",
    route: "machine-learning"
  },
]
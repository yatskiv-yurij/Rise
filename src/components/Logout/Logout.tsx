import { LogoutOutlined } from "@mui/icons-material";
import { LogoutButtonStyled } from "./Logout.styles";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function Logout() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };
  return (
    <LogoutButtonStyled aria-label="Logout" onClick={handleLogout}>
      <LogoutOutlined sx={{ fontSize: 14 }} />
    </LogoutButtonStyled>
  );
}

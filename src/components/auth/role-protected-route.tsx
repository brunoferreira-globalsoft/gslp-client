import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth-store'

interface RoleProtectedRouteProps {
  children: React.ReactNode
  allowedRoles: string[]
}

export default function RoleProtectedRoute({
  children,
  allowedRoles,
}: RoleProtectedRouteProps) {
  const roleId = useAuthStore((state) => state.roleId)
  const role = roleId?.toLowerCase() || 'guest'

  if (!allowedRoles.includes(role)) {
    return <Navigate to='/not-found' replace />
  }

  return <>{children}</>
}

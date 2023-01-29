import { Spinner } from "@chakra-ui/react"

export const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      < Spinner variant="string" size="xl" w-full />
    </div>
  )
}

import { Spinner } from "@chakra-ui/react"

export const Loading = () => {
  return (
    <div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
      <div class="border-t-transparent border animate-spin  rounded-full border-black border-4 h-16 w-16"></div>
    </div>
  )
}

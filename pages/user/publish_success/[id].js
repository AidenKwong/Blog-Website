import { useRouter } from "next/router";

export default function id() {
  const router = useRouter();
  const post = router.query;
  console.log(post);
  return <div></div>;
}

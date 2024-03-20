
export default function BoardId({ params }: { params: { slug: string } }){
  return(
    <div>{params.slug}</div>
  )
}
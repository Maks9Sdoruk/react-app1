const videos = [
    {
    name: 'just video',
    duration: '1 minute',
    id: '1'
},
{
    name: 'face reveal',
    duration: '1 minute',
    id: '2'
},
{
    name: 'maybe video',
    duration: '1 minute',
    id: '3'
}
]
export function VideoList(){
    return(
        <>
        <h1>Video list</h1>
        {
            videos.map((video) => {
                return (
                    <div key={video.id}>
                      <p>{video.name}</p>
                      <p>{video.duration}</p>
                      <button>Like!</button>
                    </div>
                )
            })
        }
        
        
        </>
    )
        
}
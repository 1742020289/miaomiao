export default{
    path :'/movie',
    component : ()=> import('@/views/Movie'),
    children:[
        {
            path :'city',
            component :()=> import('@/components/City')
        },
        {
            path :'nowPlaying',
            component :()=> import('@/components/NowPlaying')
        },
        {
            path :'CommingSoon',
            component :()=> import('@/components/CommingSoon')
        },
        {
            path :'search',
            component :()=> import('@/components/Search')
        },
        {
            path:'detail/1/:id',
            components:{
                default:()=>import('@/components/NowPlaying'),
                detail:()=> import ('@/views/Movie/detail')
            },
            props:{
                detail:true,
            }
        },
        {
            path:'detail/2/:id',
            components:{
                default:()=>import('@/components/CommingSoon'),
                detail:()=> import ('@/views/Movie/detail')
            },
            props:{
                detail:true,
            }
        },
        {
            path :'/movie',
            redirect: '/movie/nowPlaying'
        }
    ]
}
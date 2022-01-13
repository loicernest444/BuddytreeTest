import React, { useEffect, useState } from 'react';
import "./Post.css";
import { useForm } from "react-hook-form";


const PostPage: React.FC = () => {

    const [fileSelected, setFileSelected] = React.useState<any>();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const {
        register: register2,
        formState: { errors: errors2 },
        handleSubmit: handleSubmit2,
        reset: reset2
    } = useForm();

    const [postData, setpostData] = useState<any>([]);
    const [currentPost, setcurrentPost] = useState<any>([]);
    const [currentComment, setcurrentComment] = useState<any>([]);
    const [currentPostIndex, setcurrentPostIndex] = useState<any>();
    const [activeItem, setactiveItem] = useState<any>();

    const _onChange = (refs: any, type: any) => {
        // Assuming only image
        var file = refs[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);

        reader.onloadend = function (e: any) {
            setFileSelected(reader.result);
            if (type == 'post') {
                onSubmit(null, reader.result)
                return;
            }
            onSubmitCommentPost(null, reader.result);
        }.bind(this);
    }


    var staticpostData = [
        {
            'id': 1, "pseudo": "Jan2", "avatar": "https://www.afrik.com/wp-content/uploads/2021/02/samuel-eto-o-ok-696x392.jpg",
            'post':
            {
                'id': 1, "message": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets", "image": "https://beninwebtv.com/sport/wp-content/uploads/2021/11/Etoo.jpg", "created-at": "4:10pm",
                'comment': [
                    {
                        'id': 1, "message": "lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, ", "image": "https://www.leparisien.fr/resizer/s2Q0QKPRARmvypN8UXycS6yneC8=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/BT7PHPTGZQ7L7Q6RH5UWQM3NUE.jpg", "created-at": "4:10pm",
                        'user': { 'id': 1, "pseudo": "Jan2", "avatar": "https://mondialsport.ci/images/didier-drogba-nouvelle-recrue-de-canal-plus-16214-actu.jpg", }
                    }
                ]
            }
            ,
        },
        {
            'id': 2, "pseudo": "Issac", "avatar": "https://www.famousbirthdays.com/headshots/issac-yiu-3.jpg",
            'post':
            {
                'id': 2, "message": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham", "image": "https://sf2.bibamagazine.fr/wp-content/uploads/biba/2016/07/5-idees-de-repas-a-emporter-a-la-plage.jpg", "created-at": "4:10pm",
                'comment': [
                    {
                        'id': 1, "message": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered", "image": "https://media-cdn.tripadvisor.com/media/photo-s/01/63/86/27/plage-de-happy-bay.jpg", "created-at": "4:10pm",
                        'user': { 'id': 1, "pseudo": "Jan2", "avatar": "https://mondialsport.ci/images/didier-drogba-nouvelle-recrue-de-canal-plus-16214-actu.jpg", }
                    }
                    , {
                        'id': 1, "message": "search for 'lorem ipsum' will uncover many web sites still in their infancy", "image": null, "created-at": "4:10pm",
                        'user': { 'id': 1, "pseudo": "Jan2", "avatar": "https://mondialsport.ci/images/didier-drogba-nouvelle-recrue-de-canal-plus-16214-actu.jpg", }
                    }
                ]
            }
            ,
        },
        {
            'id': 4, "pseudo": "Larisa", "avatar": "https://www.lumibeauty.com/1623-large_default/mileva-hair-ponytail-afro-kinky-curl.jpg",
            'post':
            {
                'id': 3, "message": "post message", "image": "https://beninwebtv.com/sport/wp-content/uploads/2021/11/Etoo.jpg", "created-at": "4:10pm",
                'comment': [
                    {
                        'id': 1, "message": "Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H", "image": null, "created-at": "4:10pm",
                        'user': { 'id': 1, "pseudo": "Jan2", "avatar": "https://mondialsport.ci/images/didier-drogba-nouvelle-recrue-de-canal-plus-16214-actu.jpg", }
                    }
                ]
            }
            ,
        },

    ]

    var authUser = { 'id': 1, 'pseudo': 'Jean2', 'avatar': "ttps://www.afrik.com/wp-content/uploads/2021/02/samuel-eto-o-ok-696x392.jpg" }


    useEffect(() => {
        setpostData(staticpostData);
        setactiveItem(2);
    }, [])


    const onSubmit = (data: any, image: any) => {
        if (data != null) {
            if (data.comment.replace(/ /g, '') == '') {
                return;
            }
        }

        var post =
        {

            'id': 1, "pseudo": "Jean2", "avatar": "https://www.lumibeauty.com/1623-large_default/mileva-hair-ponytail-afro-kinky-curl.jpg",
            'post':
            {
                'id': 3, "message": data?.comment, "image": image, "created-at": "4:10pm",
                'comment': []
            }
        }

        setpostData([post, ...postData]);

        console.log(post);
        reset();
    }

    const onSubmitCommentPost = (value: any, image: any) => {
        var postData = currentPost;

        var commentData = {
            'id': 1, "message": value?.cmtpost, "image": image, "created-at": "4:10pm",
            'user': { 'id': 1, "pseudo": "Jan2", "avatar": "https://mondialsport.ci/images/didier-drogba-nouvelle-recrue-de-canal-plus-16214-actu.jpg", }
        }

        postData['comment'].push(commentData);

        reset2();

    }

    const deletePost = (index: any) => {
        const temp = [...postData];
        temp.splice(index, 1);
        setpostData(temp);
    }

    const getCurrentPost = (post: any, index: any) => {
        setcurrentPost(post);
        setcurrentPostIndex(index);
    }

    return (
        <div>
            <div className="munu d-flex w-100 text-center justify-content-center">
                <p className={activeItem == 1 ? "active" : ""} onClick={() => setactiveItem(1)}>Home</p>
                <p className={activeItem == 2 ? "active" : ""} onClick={() => setactiveItem(2)}>Post</p>
                <p className={activeItem == 3 ? "active" : ""} onClick={() => setactiveItem(3)}>Public</p>
                <p className={activeItem == 4 ? "active" : ""} onClick={() => setactiveItem(4)}>Advice</p>
            </div>

            {
                activeItem == 1 &&
                <div className="container">
                    <h1 className="text-center">Home page</h1>
                </div>
            }

            {
                activeItem == 2 &&
                <div className="container mt-2">
                    <form key={1} onSubmit={handleSubmit(onSubmit)} className="w-100">
                        <div className="card send-post-card p-2 mt-2 shadow-sm braduis">
                            <input type="text" {...register('comment', { required: false })} className="form-control-lg" placeholder="What's on your mind ?" />
                            <div className="d-flex justify-content-between align-items-center">
                                <label>
                                    <img src="https://static.thenounproject.com/png/1156518-200.png" alt="" className="icon-image" />
                                    <input type="file" name="user[image]" onChange={(e: any) => { _onChange(e.target.files, 'post'); }} style={{ visibility: "hidden" }} />
                                </label>
                                <input type="submit" className="btn btn-primary mt-2 share-btn" value="Share" />

                            </div>
                        </div>
                    </form>
                    {postData.map((data: any, index: any) => {
                        return (<div className="post-content card mt-2 p-2 py-3 braduis" key={index}>
                            <div className="user-post">
                                <div className="user-post-avatar">
                                    <img src={data['avatar']} alt="avatar" className='user-avatar-circle' />
                                </div>
                                <div className="user-post-details ml-4">
                                    <div className="user-post-message">
                                        {data['post']['message'] && <p>{data['post']['message']}</p>}
                                        {data['post']['image'] && <img src={data['post']['image']} alt="" className='post-image' />}
                                        <div className="user-post-option d-flex">
                                            <div className="post-pseudo">{data['pseudo']} 4:10pm</div>
                                            {
                                                data['id'] == authUser['id'] && <div className="edit-delete d-flex ml-2">
                                                    <p className="edit">Edit</p>
                                                    <p className="ml-2 edit" onClick={() => deletePost(index)}>Delete</p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {data['post']['comment'].map((result: any, index2: any) => {
                                return (
                                    <div className="user-post-comment" key={index2}>
                                        <div className="user-post-comment-avatar">
                                            <img src="https://www.afrik.com/wp-content/uploads/2021/02/samuel-eto-o-ok-696x392.jpg" alt="avatar" className='user-avatar-circle avatar-sm' />
                                        </div>
                                        <div className="user-post-comment-details">
                                            <div className="user-post-comment-message">
                                                {result['message'] != null && <p>{result['message']}</p>}
                                                {result['image'] != null && <img src={result['image']} alt="" className='post-image image-sm' />}

                                                <div className="user-post-option d-flex">
                                                    <div className="post-pseudo">Jan2 4:10pm</div>
                                                    {/* {
                                                data['id'] == authUser['id'] && <div className="edit-delete d-flex ml-2">
                                                    <p className="edit edit-sm">Edit</p>
                                                    <p className="ml-2 edit edit-sm">Delete</p>
                                                </div>
                                            } */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <form key={2} onSubmit={handleSubmit2(onSubmitCommentPost)} className="w-100" >
                                <div className="write-comment">
                                    <input type="text" {...register2("cmtpost", { required: false })} placeholder="Write a comment" className="form-control" onMouseEnter={() => getCurrentPost(data['post'], index)} />
                                    <label>
                                        <img src="https://static.thenounproject.com/png/1156518-200.png" alt="" className="icon-image icon-image-sm" />
                                        <input type="file" name="user[image]" onChange={(e: any) => { _onChange(e.target.files, null); getCurrentPost(data['post'], index) }} style={{ visibility: "hidden" }} />
                                    </label>
                                </div>
                            </form>
                        </div>
                        )
                    })}
                </div >
            }

            {
                activeItem == 3 &&
                <div className="container mt-2">
                    <div className="post-card  d-flex p-2">
                        <div className="card-img-text">
                            <img src="https://www.fbi.gov/news/stories/raising-awareness-of-opioid-addiction/@@images/image" className="card-img" alt="" />
                            <div className="text-on-img">
                                <p>THE WAR ON DRUGS</p>
                             </div>
                        </div>
                        <div className="post-card-details">
                            <h1>SAT, JAN 1, 10:00 AM</h1>
                            <h1>PST</h1>

                            <div className="avatar-row mt-2 ml-3">
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                                <img src="https://www.imedias.net/wp-content/uploads/2021/08/0_GettyImages-465709494.jpg" alt="" className="avatar-circle" />
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                            </div>

                            <h2 className="sub-text">5.3 spots left</h2>
                        </div>
                    </div>
                    <div className="post-card  d-flex p-2">
                        <div className="card-img-text">
                            <img src="https://i.ytimg.com/vi/olNlkOKn--E/maxresdefault.jpg" className="card-img" alt="" />
                            <div className="text-on-img">
                                <p>LEGEND GORUNS</p>
                            </div>
                        </div>
                        <div className="post-card-details">
                            <h1>MUN, JAN 2, 14:00 AM</h1>
                            <h1>PST</h1>

                            <div className="avatar-row mt-2 ml-3">
                                <img src="https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people-a-z/didier-drogba/6134444-7-fre-FR/Didier-Drogba.jpg" alt="" className="avatar-circle" />
                                <img src="https://st3.depositphotos.com/1767687/17621/v/600/depositphotos_176214104-stock-illustration-default-avatar-profile-icon.jpg" alt="" className="avatar-circle" />
                                <img src="https://i-mom.unimedias.fr/2020/09/16/dragon-ball-songoku.jpg?auto=format,compress&cs=tinysrgb" alt="" className="avatar-circle" />
                            </div>

                            <h2 className="sub-text">2.3 spots left</h2>
                        </div>
                    </div>
                    <div className="post-card  d-flex p-2">
                        <div className="card-img-text">
                            <img src="https://img-0.journaldunet.com/xvCqiWcrb9p-SSGEdgKMPzm8yKQ=/1500x/smart/12031eca4694402597cc7e8cf12daefb/ccmcms-jdn/10832213.jpg" className="card-img" alt="" />
                            <div className="text-on-img">
                                <p>LOREM UPSUNM</p>
                            </div>
                        </div>
                        <div className="post-card-details">
                            <h1>SAT, JAN 1, 10:00 AM</h1>
                            <h1>PST</h1>

                            <div className="avatar-row mt-2 ml-3">
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                            </div>

                            <h2 className="sub-text">5.3 spots left</h2>
                        </div>
                    </div>
                    <div className="post-card  d-flex p-2">
                        <div className="card-img-text">
                            <img src="https://www.fbi.gov/news/stories/raising-awareness-of-opioid-addiction/@@images/image" className="card-img" alt="" />
                            <div className="text-on-img">
                                <p>THE WAR ON DRUGS</p>
                            </div>
                        </div>
                        <div className="post-card-details">
                            <h1>SAT, JAN 1, 10:00 AM</h1>
                            <h1>PST</h1>

                            <div className="avatar-row mt-2 ml-3">
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                            </div>

                            <h2 className="sub-text">5.3 spots left</h2>
                        </div>
                    </div>
                    <div className="post-card  d-flex p-2">
                        <div className="card-img-text">
                            <img src="https://www.fbi.gov/news/stories/raising-awareness-of-opioid-addiction/@@images/image" className="card-img" alt="" />
                            <div className="text-on-img">
                                <p>THE WAR ON DRUGS</p>
                            </div>
                        </div>
                        <div className="post-card-details">
                            <h1>SAT, JAN 1, 10:00 AM</h1>
                            <h1>PST</h1>

                            <div className="avatar-row mt-2 ml-3">
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                            </div>

                            <h2 className="sub-text">5.3 spots left</h2>
                        </div>
                    </div>
                    <div className="post-card  d-flex p-2">
                        <div className="card-img-text">
                            <img src="https://www.fbi.gov/news/stories/raising-awareness-of-opioid-addiction/@@images/image" className="card-img" alt="" />
                            <div className="text-on-img">
                                <p>THE WAR ON DRUGS</p>
                            </div>
                        </div>
                        <div className="post-card-details">
                            <h1>SAT, JAN 1, 10:00 AM</h1>
                            <h1>PST</h1>

                            <div className="avatar-row mt-2 ml-3">
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                                <img src="https://nigerianguide.com.ng/wp-content/uploads/2020/06/Top-10-Best-Make-Up-Schools-In-Lagos.jpg" alt="" className="avatar-circle" />
                            </div>

                            <h2 className="sub-text">5.3 spots left</h2>
                        </div>
                    </div>
                </div>
            }

            {
                activeItem == 4 &&

                <div className="container mt-2 p-2">
                    <div className="row bg-white row-no-padding">
                        <div className="col-md-4 nopadding">
                            <div className="advice-post">
                                <img src="https://www.dafont.com/img/illustration/h/a/happy_day_2.png" alt="" className="advice-post-img" />
                                <div className="advice-content">
                                    <h1>Happy day</h1>
                                    <h2>Potential Friends</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 nopadding"> 
                            <div className="advice-post">
                                <img src="https://portugalinews.eu/wp-content/uploads/2018/09/film.jpg" alt="" className="advice-post-img" />
                                <div className="advice-content">
                                    <h1>Explore</h1>
                                    <h2>Potential Friends</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 nopadding">
                            <div className="advice-post">
                                <img src="https://img.20mn.fr/QLZj2GPLSsChA0bzZ5H4lw/830x532_slug%20magazine.jpg" alt="" className="advice-post-img" />
                                <div className="advice-content">
                                    <h1>Finding</h1>
                                    <h2>Potential Friends</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 nopadding">
                            <div className="advice-post">
                                <img src="https://media.istockphoto.com/photos/mowing-the-grass-picture-id135439245?k=20&m=135439245&s=612x612&w=0&h=O57buGCKq_NvxZPb3Pby_OORLWAWnoGIjqahFrpwso4=" alt="" className="advice-post-img" />
                                <div className="advice-content">
                                    <h1>Title</h1>
                                    <h2>Potential Friends</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 nopadding">
                            <div className="advice-post">
                                <img src="https://www.latelierdanse.com/images/pic150.jpg" alt="" className="advice-post-img" />
                                <div className="advice-content">
                                    <h1>Danse</h1>
                                    <h2>I love it</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 nopadding">
                            <div className="advice-post">
                                <img src="https://www.noovomoi.ca/content/dam/style-de-vie/migrated/images/2019/10/09/danser.jpg" alt="" className="advice-post-img" />
                                <div className="advice-content">
                                    <h1>Finding</h1>
                                    <h2>Potential Friends</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 nopadding">
                            <div className="advice-post">
                                <img src="https://img.20mn.fr/QLZj2GPLSsChA0bzZ5H4lw/830x532_slug%20magazine.jpg" alt="" className="advice-post-img" />
                                <div className="advice-content">
                                    <h1>Finding</h1>
                                    <h2>Potential Friends</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }


        </div>
    );
}

export default PostPage;
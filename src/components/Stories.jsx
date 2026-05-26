import './Stories.css'

function Stories(){
     const stories = [
    {

      username: "mia",
      image: "https://i.pravatar.cc/150?img=10"
    },
    {

      username: "leo",
      image: "https://i.pravatar.cc/150?img=13"
    },
    {

      username: "sofia",
      image: "https://i.pravatar.cc/150?img=20"
    },
    {

      username: "emma",
      image: "https://i.pravatar.cc/150?img=16"
    },
    {

      username: "alex",
      image: "https://i.pravatar.cc/150?img=15"
    },
    {

      username: "lucas",
      image: "https://i.pravatar.cc/150?img=14"
    },
    {
      username: "anna",
      image: "https://i.pravatar.cc/150?img=21"
    },
    {
      username: "jazmín",
      image: "https://i.pravatar.cc/150?img=25"
    }
  ];

    return(
        <section className="stories">
            {stories.map(story => (
                <div className='story'>
                <div className="profile-border">
                    <img
                        className="profile-picture"
                        src={story.image}
                        alt="profile"
                    />
                </div>
                <p className='user'>@{story.username}</p>
                </div>
            ))}
        </section>
    );
}

export default Stories;
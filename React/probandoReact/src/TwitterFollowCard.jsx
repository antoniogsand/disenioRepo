export function TwitterFollowCard (userName, name, isFollowing) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img alt="Imagen prueba"
                src={`"/gato_comunista.jpg"${userName}`}/>
                <div>
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}
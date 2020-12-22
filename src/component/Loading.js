import style from './loading.module.css'


const Loading = () => {
    return (
        <div>
            <div className={style["lds-ripple"]}><div></div><div></div></div>
        </div>
    )
}

export default Loading

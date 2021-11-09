import React from "react";

const Card = ({name, email, id}) => {
    return [
        
        <div className='tc bg-pink dib br-3 pa1 grow bw2 ma1 shadow-5'>
            <img alt='friends' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    ]
}

export default Card;
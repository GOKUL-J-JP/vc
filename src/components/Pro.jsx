/* eslint-disable react/prop-types */

export const Pro = (props) => {
    props.name = 'john'
    return (
        <div>
            <h4>
                {props.name} -- {props.age} -- {props.dob}
            </h4>
        </div>
    )
}

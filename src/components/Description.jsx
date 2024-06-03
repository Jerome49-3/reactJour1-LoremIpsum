/* eslint-disable react/prop-types */

const Description = (props) => {
  console.log('props:', props)
  return (
    <>
      <p>
        {props.text}
      </p>
    </>
  )
}
export default Description;

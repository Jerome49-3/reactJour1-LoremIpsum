/* eslint-disable react/prop-types */


const Title = (props) => {
  console.log('props:', props)
  return (
    <>
      <h1>
        {props.title}
      </h1>
    </>
  )
}
export default Title;

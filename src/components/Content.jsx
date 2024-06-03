/* eslint-disable react/prop-types */
import Title from './Title';
import Description from './Description';

const Content = (props) => {
  return (
    <>
      <article>
        <Title title={props.title} />
        <Description text={props.text} />
      </article>
    </>
  )
}

export default Content

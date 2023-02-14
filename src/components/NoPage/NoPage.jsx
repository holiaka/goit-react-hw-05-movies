import NoFoundImage from '../../images/no_page.png';

const NoPage = () => {
  return (
      <div>
          <h1>This page does not exist on the website</h1>
          <img src={NoFoundImage} alt="Page no found" />
    </div>
  );
};

export default NoPage;
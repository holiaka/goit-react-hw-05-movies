import NoFoundImage from '../../images/no_page.png';
import { NoPageBox } from './NoPage.styled';

const NoPage = () => {
  return (    
    <NoPageBox>
      <h1>This page does not exist on the website</h1>
      <img src={NoFoundImage} alt="Page no found" width="200" />
    </NoPageBox>   
  );
};

export default NoPage;

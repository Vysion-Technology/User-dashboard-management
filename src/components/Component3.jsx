import React from 'react';
import Rectangle1Image from './../assets/images/Component3_Rectangle_1.png';
import Ellipse964Image from './../assets/images/Component3_Ellipse_964.png';
import Ellipse965Image from './../assets/images/Component3_Ellipse_965.png';
import Ellipse963Image from './../assets/images/Component3_Ellipse_963.png';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const Property1Default = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `73px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  marginTop: `15px`
});

const Rectangle1 = styled('img')({
  height: `73px`,
  width: `404.92px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Frame427319035 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `364px`,
  left: `20px`,
  top: `18px`,
});

const Frame427319036 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Group698 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `62px`,
  height: `38px`,
  margin: `0px`,
});

const Ellipse964 = styled('img')({
  height: `24px`,
  width: `24px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `38px`,
  top: `7px`,
});

const Ellipse965 = styled('img')({
  height: `24px`,
  width: `24px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `7px`,
});

const Ellipse963 = styled('img')({
  height: `38px`,
  width: `38px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `12px`,
  top: `0px`,
});

const Frame427319037 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 16px`,
});

const IAmAdmin = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(64, 64, 64, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}));

const MyTaskAndAllStuff = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(64, 64, 64, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}));

const RadioButton = styled('input')({
    opacity: `1`,
    zIndex: `1`,
    cursor: `pointer`,
    width: `16px`,
    height: `16px`,
    marginRight: `10px`
});
 
  




function Component3(props) {
  const navigate = useNavigate();
  const nav = async () =>{
    navigate('/login',{state : {  level: props.level, color: 'green'  },});
  }
  return (
    <Property1Default className={props.className}>
      <Rectangle1 src={Rectangle1Image} loading="lazy" alt={'Rectangle 1'} />
      <Frame427319035>
        <Frame427319036>
          <Group698>
            <Ellipse964
              src={Ellipse964Image}
              loading="lazy"
              alt={'Ellipse 964'}
            />
            <Ellipse965
              src={Ellipse965Image}
              loading="lazy"
              alt={'Ellipse 965'}
            />
            <Ellipse963
              src={Ellipse963Image}
              loading="lazy"
              alt={'Ellipse 963'}
            />
          </Group698>
          <Frame427319037>
            <IAmAdmin>{props.title}</IAmAdmin>
            <MyTaskAndAllStuff>{`My task and all stuff`}</MyTaskAndAllStuff>
          </Frame427319037>
        </Frame427319036>
        <RadioButton
        onChange={() => nav()}
         type="radio"
         name="radio"
         value="admin"
        />
      </Frame427319035>
    </Property1Default>
  );
}

export default Component3;
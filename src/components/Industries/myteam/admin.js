import React from 'react';
import Ellipse3Image from './assets/images/Component1_Ellipse_3.png';
import VectorImage from './assets/images/Component1_Vector.png';
import Vector1Image from './assets/images/Component1_Vector_1.png';
import { styled } from '@mui/material/styles';

const Component11 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const Component12 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Admin = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(64, 64, 64, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `28px`,
  textTransform: `none`,
  margin: `0px`,
});

const Frame47 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `134.95px`,
  width: `587.41px`,
  margin: `12px 0px 0px 0px`,
  overflow: `hidden`,
});

const Rectangle4 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `12px`,
  width: `587.41px`,
  height: `134.95px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Frame50 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `46px`,
  top: `35px`,
});

const Frame46 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Ellipse3 = styled('img')({
  height: `64px`,
  width: `64px`,
  objectFit: `cover`,
  margin: `0px`,
});

const Frame45 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 18px`,
});

const MyName = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(64, 64, 64, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const MynameMywebsiteCom = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(102, 102, 102, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const Frame49 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 199px`,
});

const Edit1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `23px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector = styled('img')({
  height: `15.81px`,
  width: `16.5px`,
  position: `absolute`,
  left: `3px`,
  top: `4px`,
});

const Vector1 = styled('img')({
  height: `23px`,
  width: `24px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Edit = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(51, 143, 235, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 2px`,
});

function AdminSection(props) {
  return (
    <Component11 className={props.className}>
      <Component12>
        <Admin>{`Admin`}</Admin>
        <Frame47>
          <Rectangle4></Rectangle4>
          <Frame50>
            <Frame46>
              <Ellipse3 src={Ellipse3Image} loading="lazy" alt={'Ellipse 3'} />
              <Frame45>
                <MyName>{`My name`}</MyName>
                <MynameMywebsiteCom>
                  {`myname@mywebsite.com`}
                </MynameMywebsiteCom>
              </Frame45>
            </Frame46>
            <Frame49>
              <Edit1>
                <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
                <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
              </Edit1>
              <Edit>{`Edit`}</Edit>
            </Frame49>
          </Frame50>
        </Frame47>
      </Component12>
    </Component11>
  );
}

export default AdminSection;
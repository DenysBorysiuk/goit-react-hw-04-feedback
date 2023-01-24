import PropTypes from 'prop-types';
import { SectionWrap, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionWrap>
    <Title>{title}</Title>
    {children}
  </SectionWrap>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

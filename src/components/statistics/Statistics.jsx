import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.staylad';
function Statistics({ stats, title }) {
  return (
    <Section className="statistics">
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage, idx }) => (
          <StatItem className="item" key={id} index={idx}>
            <Label className="label">{label}</Label>
            <Percentage className="percentage">{percentage}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
}

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
  title: PropTypes.string,
};

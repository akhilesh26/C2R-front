import React, {Fragment} from 'react';
import styled from 'styled-components';

const Header = styled.h2`
	
`;
const Paragraph = styled.p`
	margin-top: 10px;
	font-size: 14px;
	text-align: justify;
`;

const OverviewWrapper = styled.div`
	padding: 0 15% 0 15%;
`

const Overview = () =>
	<OverviewWrapper>
		<Header>Who we are?</Header>
		<Paragraph>
			Connect to Roots (C2R) is a non-profit organisation conceptualised, managed, and run by a
			group of patriotic Indian citizens with specialisation in areas of social, Information Technology,
			economics, culture, and polity framework.
		</Paragraph>

		<Paragraph>
			Connect2Roots (C2R) is brainchild of young, self motivated and patriotic citizens who had to
			migrate from their native place in order to search for education and employment, leaving behind
			his soil where his roots are still deeply rooted. Then the idea propped up to coordinate among the
			branches to connect to their roots in order to strengthen by enriching not only the soil where roots
			are planted, but also help in flourishing the new leaves and branches coming out of it
		</Paragraph>

		<Header>Objective</Header>
		<Paragraph>
			C2R objective is to build an enabling environment where the means to achieve anyone’s dream
			for giving to their roots can be made success without their physical presence. Yesteryears youths
			have migrated to urban cities in search of education, employment and livelihood has been
			contributing in urban growth. C2R is keen to create a linkage between these branches of Bharat
			to their roots (villages) in order to help them to contribute towards equal development of Bharat.
		</Paragraph>

		<Paragraph>
			C2R’s vision is to be a pivotal player in the integrated development of Rural India i.e. Bharat.
			Starting from ancient history to the arrival of Britishers, villages of India were self-sufficient and
			were driving force behind economic, social and political growth of India. At the time of
			independence, Mahatma Gandhi advocated to focus on development of rural India if India has to
			re-emerge as world leader. However, post-independence policies were more inclined towards
			urban India where rural youth migrated to urban cities in search of education and employment.
			Thus creating a huge imbalance and need to focus on re-focus on rural India i.e. Bharat.
		</Paragraph>

	</OverviewWrapper>

export default Overview;
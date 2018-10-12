import React, {Component,Fragment} from 'react';
import styled from 'styled-components';

import TeamMember from '../../common-utils/TeamMember';

const CoreTeam = [
    {
        name: 'Rajeev Ranjan',
        imageUrl: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-0/c0.9.370.370/p370x247/36915634_1680240475431791_7770331270009061376_n.jpg?_nc_cat=108&oh=1388eaf7071e46fa4c6ada3576eb27f6&oe=5C495808',
        detail: 'Director'
    },{
        name: 'Shekhar Prasad',
        imageUrl: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-0/c0.9.370.370/p370x247/36915634_1680240475431791_7770331270009061376_n.jpg?_nc_cat=108&oh=1388eaf7071e46fa4c6ada3576eb27f6&oe=5C495808',
        detail: 'Director'
    }
];

const CoreTeamWrapper = styled.div`
    display: flex;

`
const TeamName = styled.h2`

`

export default () =>(
    <div style={{padding:'2% 15% 2% 15%'}}>

        <TeamName>Core Team</TeamName>
        <CoreTeamWrapper>
            
            {
                CoreTeam.map(member => 
                    <TeamMember
                        name={member.name}
                        imageUrl={member.imageUrl}
                        detail={member.detail}
                    />
                )
            }
            
        </CoreTeamWrapper>
    </div>
)
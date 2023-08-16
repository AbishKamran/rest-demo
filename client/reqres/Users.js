import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';



export default function Users() {
    const [data, setData] = useState([]) 

    function effect() {
        axios.get("https://reqres.in/api/users?page=1").then((response) => {
            console.log(response.data.data); 
            setData(response.data.data); 
        });
    }

    useEffect(effect, ["users"]); 

    return (
        <div> 
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

          
        {
            
            data.map( o => (
                <ListItem>
                    <ListItemAvatar>
                        
                        <Avatar src= {o.avatar} />
                            
                        
                    </ListItemAvatar>
                    <ListItemText primary={o.first_name} secondary={o.email} />
                </ListItem>
            ))
        } 
         
            </List>

        </div>
        
    )

}

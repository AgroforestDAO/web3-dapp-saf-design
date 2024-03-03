import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import { getProofs } from '../../services/firebaseService'; // Ajuste o caminho conforme necessário
import { format } from 'date-fns';

const ExpandMore = styled((props) => {
 const { expand, ...other } = props;
 return <IconButton {...other} />;
})(({ theme, expand }) => ({
 transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
 marginLeft: 'auto',
 transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
 }),
}));

export default function CardSucession() {
 const [expanded, setExpanded] = React.useState(false);
 const [data, setData] = useState(null);

 useEffect(() => {
    const fetchProofs = async () => {
      // Substitua 'uidDoUsuario' pelo UID real do usuário
      const proofsData = await getProofs('uidDoUsuario');
      setData(proofsData);
    };

    fetchProofs();
 }, []);

 const handleExpandClick = () => {
    setExpanded(!expanded);
 };

 if (!data) {
    return <div>Você ainda não tem nenhuma foto da Prova de Sucessão. Baixe o App AgroforestDAO no seu celular e envie as fotos.</div>;
 }

 return (
    <Card sx={{ maxWidth: 345 }}>
      <Typography variant="h4" component="div" style={{ fontFamily: "Roboto" }}>
         Prova de Sucessão
       </Typography>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {data.createdByName.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.title}
        subheader={data.createdByEmail}
      />
      <CardMedia
        component="img"
        height="194"
        image={data.photoProofURL}
        alt={data.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={{ fontFamily: "Roboto" }}>
          {data.description}
        </Typography>
        <Typography variant="caption" color="text.secondary" style={{ fontFamily: "Roboto" }}>
          Criado em: {format(new Date(data.createdAt.toDate()), 'dd/MM/yyyy HH:mm')}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {/* Aqui você pode adicionar mais detalhes sobre o composto */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
 );
}

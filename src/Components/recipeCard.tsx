import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import GradeSharpIcon from '@mui/icons-material/GradeSharp';
import { Recipe } from '../types';
import { useState } from 'react';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeCard = ({
  title,
  description,
  ingredients,
  instructions,
  img,
  category,
  cookingtime,
  rating,
}: Recipe) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const handleExpandClickIngredients = () => {
    setShowIngredients(!showIngredients);
  };
  const [showDescription, setShowDescription] = useState(false);
  const handleExpandClickDescription = () => {
    setShowDescription(!showDescription);
  };
  const [showInstructions, setShowInstructions] = useState(false);
  const handleExpandClickInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <Card sx={{ width: '300px' }}>
      <CardMedia component="img" height="194" image={img} alt="Food image" />

      <Typography variant="h5">{title}</Typography>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Typography paragraph>Опис</Typography>
        <ExpandMore
          expand={showDescription}
          onClick={handleExpandClickDescription}
          aria-expanded={showDescription}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </div>
      <Collapse in={showDescription} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Collapse>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Typography paragraph>Інгрідієнти</Typography>
        <ExpandMore
          expand={showIngredients}
          onClick={handleExpandClickIngredients}
          aria-expanded={showIngredients}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </div>
      <Collapse in={showIngredients} timeout="auto" unmountOnExit>
        <CardContent>
          {ingredients.map((elem, id) => (
            <Typography key={id} paragraph>
              {elem}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Typography paragraph>Інструкція:</Typography>
        <ExpandMore
          expand={showInstructions}
          onClick={handleExpandClickInstructions}
          aria-expanded={showInstructions}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </div>
      <Collapse in={showInstructions} timeout="auto" unmountOnExit>
        <CardContent>
          {instructions.map((elem, id) => (
            <Typography key={id} paragraph>
              {elem}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        disableSpacing
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Typography>{cookingtime}хв</Typography>
          <AccessTimeSharpIcon />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Typography>{rating}</Typography>
          <GradeSharpIcon />
        </div>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;

import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { foodData } from '../TableData';
import SideBar from '../scenes/global/SideBar';

function FoodDetail() {
  const { foodId } = useParams();
  const food = foodData.find(item => item.id === parseInt(foodId, 10));

  if (!food) {
    return <Typography>Food not found</Typography>;
  }

  return (
    <>
    <SideBar></SideBar>
    <Box p={4} sx={{maxWidth: '800px', margin: 'auto', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginTop: "40px"}}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>{food.name}</Typography>
      <Box sx={{ mb: 2 }}>
        <img src={food.image} alt={food.name} style={{ width: '400px', borderRadius: '8px', objectFit: 'cover' }}/> 
        <Box display="flex" justifyContent="space-between" marginTop="20px">
        <Typography variant="body1" sx={{ mb: 1 }}><strong>Star:</strong> {food.star}</Typography>
        <Typography variant="body1" sx={{ mb: 1 }}><strong>Total Order:</strong> {food.order}</Typography>
        <Typography variant="body1" sx={{ mb: 1 }}><strong>Interest:</strong> {food.interest}</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}><strong>Percentage:</strong> {food.percentage}</Typography>
        </Box>
        
      </Box>
      <Box display="flex" justifyContent="space-between" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
        <Box flex={1} sx={{ pr: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Ingredients:</Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {food.ingridient.map((ingri, index) => (
              <Typography key={index} component="li" sx={{ mb: 0.5 }}>{ingri}</Typography>
            ))}
          </Box>
        </Box>
        <Box flex={1} sx={{ pl: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Nutrition:</Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {food.nutrition.map((nu, index) => (
              <Typography key={index} component="li" sx={{ mb: 0.5 }}>{nu}</Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}

export default FoodDetail;
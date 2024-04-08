// ListSafs.js
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { useAuthContext } from '../../context/AuthContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { getCache, setCache, removeCache } from '../../services/cacheService'; // Importe as funções de cache

const ListSafs = () => {
 const [safs, setSafs] = useState([]);
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
 const { user } = useAuthContext(); // Acessa o usuário logado do contexto

 useEffect(() => {
    const fetchSafs = async () => {
      setLoading(true);
      try {
        if (user) {
          const cacheKey = `safs_${user.uid}`; // Chave de cache específica para o usuário
          const cachedSafs = getCache(cacheKey);
          if (cachedSafs) {
            setSafs(cachedSafs);
          } else {
            const safsRef = collection(db, 'safs');
            const q = query(safsRef, where('createdByUID', '==', user.uid), limit(5)); // Limita a 5 documentos
            
            const querySnapshot = await getDocs(q);
            const safsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setSafs(safsData);
            setCache(cacheKey, safsData); // Armazena os SAFs no cache
          }
        }
      } catch (error) {
        console.error("Erro ao buscar SAFs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSafs();
 }, [user]); // Dependência do useEffect para o usuário logado

 // Função para limpar o cache do usuário
 function clearUserCache() {
    if (user) {
      const cacheKey = `safs_${user.uid}`;
      removeCache(cacheKey);
    }
 }

 return (
    <div style={{ marginTop:"81px", padding:"10px"}}>
      <Typography variant="h5" component="div" style={{ fontFamily: "Roboto" }}>
        Meus SAF´s
      </Typography>
      {loading ? (
        <p>Carregando SAFs...</p>
      ) : (
        safs.map((saf) => (
          <Box 
            component={Card} 
            key={saf.id}
            sx={{ marginBottom: "15px", width: "600px", cursor: "pointer", transition: "0.3s", '&:hover': { transform: "scale(1.02)", backgroundColor: "#C3E3B9" } }} 
            onClick={() => {
              navigate(`/details/${saf.id}`); // Navegação programática para a página de detalhes
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" style={{ fontFamily: "Roboto" }}>
                {saf.safName}
              </Typography>
              <Typography color="text.secondary" style={{ fontFamily: "Roboto" }}>
                Mentor: {saf.mentorName}
              </Typography>
              <Typography color="text.secondary" style={{ fontFamily: "Roboto" }}>
                Guardião: {saf.guardianName}
              </Typography>
            </CardContent>
          </Box>
        ))
      )}
      <button onClick={clearUserCache}>Limpar Cache</button> {/* Botão para limpar o cache do usuário */}
    </div>
 );
};

export default ListSafs;

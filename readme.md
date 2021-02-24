# Team-React-58
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
## COMUNIDAD

**`HOST` https://fest-api.vercel.app/**  

 **Obtener lista de comunidades**  
`GET` /community  
*objeto de respuesta:*  
```
  {
    "status": "success",
    "communities": [
	{...communityData},
	{...communityData},
	{...communityData}
    ]"
  }
```

## USUARIO  
**Agregar usuario a una comunidad**  
`POST` /user/community  
`token requerido`  
*objeto de solicitud*  
 ```
 {
	"communityId": "someCommunityId"	 
 }
 ```
 *objeto de respuesta*  
  ```
 // En caso de operacion exitosa
{
	"status": "success",
	"message": "User added to the community"
}

// En caso de error
{
	"status": "error",
	"errorMessage": "description of error here"
}
 ```

**Eliminar usuario a una comunidad**  
`DELETE` /user/community   
`token requerido`  
*objeto de solicitud*  
 ```
 {
	"communityId": "someCommunityId"	 
 }
 ```
 *objeto de respuesta*  
  ```
 // En caso de operacion exitosa
{
	"status": "success",
	"message": "user removed from community"
}

// En caso de error
{
	"status": "error",
	"errorMessage": "description of error here"
}
 ```

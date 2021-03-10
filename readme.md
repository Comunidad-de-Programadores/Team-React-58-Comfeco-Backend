# Team-React-58
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**`HOST` https://fest-api.vercel.app/**  

## COMUNIDAD  
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

**obtener lista de mis actividades**  
devuelve una lista de las ultimas cinco actividades  
`get` /user/activity   
`token requerido`  

 *objeto de respuesta*  
  ```
{
  "status": "success",
  "activities": [
    {
      date: <TimeStamp>
      message: <string>
    },
    {...},
    {...}
  ]
}
 
 
 **Actualizar datos de perfil**  
`PATCH` /user   
`token requerido`  
*objeto de solicitud*  
 ```
 {
    	username: <strng>,
    	fullname: <strng>,
    	email: <strng>,
    	gender: <strng>,
    	birthdate: <Date>,
    	country: <strng>,
    	password: <strng>,
    	confirmPassword: <strng>,
    	github: <strng>,
    	facebook: <strng>,
    	linkedin: <strng>,
    	twitter: <strng>,
    	biography: <strng>	 
 }
 ```
 *objeto de respuesta*  
  ```
 // En caso de operacion exitosa
{
	"status": "success",
}

// En caso de error
{
	"status": "error",
	"errorMessage": "description of error here"
}
 ```

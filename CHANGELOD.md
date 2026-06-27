Cambios principales respecto a tu Evaluación 2

Cada deploy ahora incluye:



kubectl rollout status --timeout=60s → verifica si los pods levantan correctamente.



Paso de rollback automático con if: failure() → se ejecuta solo si falla el paso anterior.



Timeout explícito (60s) como pide la evaluación.



Evidencia de runs fallidos y rollback será parte de tu informe.



📌 Síntesis de fallos controlados

Fallo en pruebas  

Se introdujo un error intencional en el paso Run tests del workflow (exit 1).

Resultado: la pipeline se detuvo antes de la construcción de imágenes Docker, validando que los tests bloquean el proceso en caso de error.



Fallo en Docker  

Se modificó el Dockerfile de apache con una imagen base inexistente (httpd:laaz).

Resultado: el paso Build and Push apache falló en la fase de build, impidiendo que el deploy llegara a k3s. Evidencia capturada en los logs de GitHub Actions.



Fallo en salud del pod  

Se desplegó una imagen con tag inexistente en k3s, provocando ImagePullBackOff.

Resultado: el paso Deploy falló por timeout en rollout status y se activó automáticamente el rollback (kubectl rollout undo), restaurando la versión estable.


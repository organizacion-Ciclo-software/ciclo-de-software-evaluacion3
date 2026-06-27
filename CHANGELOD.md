Cambios principales respecto a tu Evaluación 2

Cada deploy ahora incluye:



kubectl rollout status --timeout=60s → verifica si los pods levantan correctamente.



Paso de rollback automático con if: failure() → se ejecuta solo si falla el paso anterior.



Timeout explícito (60s) como pide la evaluación.



Evidencia de runs fallidos y rollback será parte de tu informe.


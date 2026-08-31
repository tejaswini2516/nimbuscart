output "aks_name" {
  description = "Name of the AKS cluster"
  value       = azurerm_kubernetes_cluster.nimbuscart.name
}

output "acr_login_server" {
  description = "Login server of the Azure Container Registry"
  value       = data.azurerm_container_registry.nimbuscart.login_server
}
data "azurerm_resource_group" "nimbuscart" {
  name = var.resource_group_name
}

data "azurerm_container_registry" "nimbuscart" {
  name                = var.acr_name
  resource_group_name = data.azurerm_resource_group.nimbuscart.name
}

resource "azurerm_kubernetes_cluster" "nimbuscart" {
  name                = var.aks_name
  location            = data.azurerm_resource_group.nimbuscart.location
  resource_group_name = data.azurerm_resource_group.nimbuscart.name
  dns_prefix          = "nimbuscart"

  default_node_pool {
    name       = "system"
    node_count = var.node_count
    vm_size    = var.node_vm_size

    upgrade_settings {
      drain_timeout_in_minutes      = 0
      max_surge                     = "10%"
      node_soak_duration_in_minutes = 0
    }
  }

  identity {
    type = "SystemAssigned"
  }
}

resource "azurerm_role_assignment" "aks_acr_pull" {
  scope                = data.azurerm_container_registry.nimbuscart.id
  role_definition_name = "AcrPull"
  principal_id         = azurerm_kubernetes_cluster.nimbuscart.kubelet_identity[0].object_id
}
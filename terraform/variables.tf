variable "resource_group_name" {
  description = "Existing Azure resource group name"
  type        = string
}

variable "location" {
  description = "Azure region"
  type        = string
}

variable "acr_name" {
  description = "Existing Azure Container Registry name"
  type        = string
}

variable "aks_name" {
  description = "AKS cluster name"
  type        = string
}

variable "node_count" {
  description = "Number of AKS worker nodes"
  type        = number
  default     = 1
}

variable "node_vm_size" {
  description = "AKS worker node VM size"
  type        = string
  default     = "Standard_B2s"
}
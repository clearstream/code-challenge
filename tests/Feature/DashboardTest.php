<?php

namespace Tests\Feature;

use Tests\TestCase;

class DashboardTest extends TestCase
{
    public function test_can_view_the_dashboard(): void
    {
        $this->get('/')
            ->assertViewIs('app')
            ->assertOk();
    }
}
